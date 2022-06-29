const uri = 'mongodb+srv://sherzod:jMaHJN5XLP99oWFv@cluster0.2yi1mgm.mongodb.net/?retryWrites=true&w=majority'
const mongoose = require('mongoose')

module.exports = async () => {
    try {
        await mongoose.connect(uri, () => {
            console.log('MongoDB connected');
        })
    } catch (error) {
        console.log(error);
    }
}



