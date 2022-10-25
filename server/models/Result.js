import mongoose from "mongoose"

const resultSchema = mongoose.Schema({
    exam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exam',
        required: true,
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
    },
    marks: {
        type: Number,
        required: true,
    },

})

export default mongoose.model('Result', resultSchema)