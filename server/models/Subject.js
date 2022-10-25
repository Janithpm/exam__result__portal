import mongoose from 'mongoose'

const subjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    credits: {
        type: Number,
        required: true,
    }
})

export default mongoose.model('Subject', subjectSchema)