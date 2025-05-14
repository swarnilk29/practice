import mongoose from "mongoose";//mongooose is orm, because puttig data through queries is hard
import validator from 'validator';// for schema validations

const User = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate : {
            validator : (value) => {
                validator.isEmail(value);
            },
            message : 'Invalid email format'
        }//if validation is correct then it will return true otherwise false and give the error message
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})