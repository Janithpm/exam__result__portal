import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min:6,
        max:255
    },
    email: {
        type: String,
        required: true,
        max: 255
    },
    userType: {
        type: String,
        required: true,
        max: 5
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
    },
    date: {
        type: Date,
        default: Date.now
    }

})

export default mongoose.model('User', userSchema)