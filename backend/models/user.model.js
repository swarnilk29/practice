import mongoose from 'mongoose';//mongooose is orm, because puttig data through queries is hard
import validator from 'validator';// for schema validations

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "Name must be at least 3 characters long 😊"],
        maxlength: [50, "Name should not exceed 50 characters 😊"],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/.+@.+\..+/, "Please enter a valid email 😊"],
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be at least 6 characters long 😊"],
    },
    confirmPassword: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return value === this.password; // Ensure confirmPassword matches password
            },
            message: "Password and Confirm Password must be the same 😊", // Error message
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
//using validator library :- if validation is correct then it will return true otherwise false and give the error message

// Hash the password before saving the user

const User = mongoose.model('User', userSchema);
export default User;