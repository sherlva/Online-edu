const { Schema, model } = require('mongoose')

const adminSchema = new Scherma({
    name: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required :true ,
        unique : true
    },
    adminImg: {
        type : String,
        default :'/public/img/avatar.png'
    },
    email:{
        type: String,
        unique: true,
        required:true
    },
    password:{
        trype: String,
        minlength: 6,
        required: true
    }
})


module.exports = model('admin', adminSchema)