import mongoose from "mongoose"

const teacherSchema = mongoose.Schema({
    teacherId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    subjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true,
    }]
})

export default mongoose.model('Teacher', teacherSchema)