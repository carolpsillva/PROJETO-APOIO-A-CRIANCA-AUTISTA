const mongoose = require("mongoose")

const profissionaisSchema = new mongoose.Schema({
        id: mongoose.Schema.Types.ObjectId,

        nome: {
            type: [String],
            required: true
            
        },

        especialidade: {
            type: [String],
            required : true

        },

        identificação: {
            type: [Number],
            required: true
        },

        estado: {
            type: [String],
            required: true
        },

        cidade: {
            type: [String],
            required: true
        },

        endereço: {
            type: [String],
            required: true
        },
      
        telefone: {
            type: [Number],
            required: true
        },

        createdAt: {
            type: String,
            default: new Date()
        }
    });




module.exports = mongoose.model("Profissionais", profissionaisSchema);

