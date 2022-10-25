import express from 'express'
import Exam from '../models/Exam.js'

const router = express.Router()


router.post('/create', (req, res) => {
    const newExam = new Exam({
        title: req.body.name,
        description: req.body.description,
        year: req.body.year,
        semester: req.body.semester,
        subject: req.body.subject,
        teacher: req.body.teacher,
        invigilators: req.body.invigilators,
        students: req.body.students
    })

    newExam.save()
    .then(() => res.status(200).send({success: true, message: 'exam created successfully'}))
    .catch(err => res.status(400).send({success: false, message: err.message}))
})

router.get('/all', (req, res) => {
    Exam.find()
    .then((exams) => res.json(exams))
    .catch((err) => res.status(400).send({success: false, message: err.message}))
})

router.get('/', (req, res) => {
    if(!req.body.examId) return res.status(404).send({success: false, message: "Invalied exam"})
    
    Exam.findById(req.body.examId)
    .then((exam) => res.json(exam))
    .catch((err) => res.status(400).send({success: false, message: err.message}))
})

router.put('/', (req, res) => {
    if(!req.body.examId) return res.status(404).send({success: false, message: "Invalied exam"})
    
    Exam.findByIdAndUpdate(req.body.examId, req.body)
    .then(() => res.status(200).send({success: false, message: "exam updated successfully"}))
    .catch((err) => res.status(400).send({success: false, message: err.message}))
})

router.delete('/', (req, res) => {
    if(!req.body.examId) return res.status(404).send({success: false, message: "Invalied exam"})
    
    Exam.findByIdAndDelete(req.body.examId)
    .then(() =>res.status(200).send({success: false, message: "exam deleted successfully"}))
    .catch((err) => res.status(400).send({success: false, message: err.message}))
})


export default router