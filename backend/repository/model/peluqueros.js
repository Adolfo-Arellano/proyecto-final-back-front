const mongoose = require ('mongoose');

const barberoSchema = mongoose.Schema({
    
nombre: {
    type:String,
    required: true
},
    
descripcion: {
    type: String,
    required: true
},

avatar: {
    type: String,
    default:'https://unsplash.com/es/fotos/un-hombre-con-un-collar-con-una-cruz-nSBl2cfwnmE'
}


})

module.exports = mongoose.model('Peluquero', barberoSchema);