import mongoose from "mongoose"

const examSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        min:6,
        max:255
    },
    description: {
        type: String,
        min:6,
        max:255
    },
    year: {
        type: Number,
        required: true,
    },
    semester: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true,
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true,
    },
    invigilators: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true,
    }],
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
    }]
})

export default mongoose.model('Exam', examSchema)