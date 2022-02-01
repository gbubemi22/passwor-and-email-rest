const mongoose = require('mongoose')
const Joi = require('joi')

const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const User = mongoose.model("user", userSchema)

const validate = (user) =>{
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
    return schema.validate(user)
}


module.exports = {User, validate}