const mongoose= require('mongoose');
const {Schema}= mongoose;


const ProdSchema= new Schema({
    title: String,
    description: String,
    image: String,
    imagee: String
})

module.exports= mongoose.model('Prod', ProdSchema);