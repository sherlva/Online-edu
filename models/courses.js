const { Schema , model} = require('mongoose')


module.exports = model('courses', new Schema({
    name: {
        type: String,
        required: true
    },
    author:{
        type: String,
    },
    img: {
        type: String,
    }
}))