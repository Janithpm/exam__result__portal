import express from 'express'

import Result from '../models/Result.js'

const router = express.Router()

router.post('/create', (req, res) => {
    const newResult = new Result({
        exam: req.body.exam,
        student: req.body.student,
        marks: req.body.marks
    })

    newResult.save()
    .then(() => res.status(200).send({success: true, message: 'result created successfully'}))
    .catch(err => res.status(400).send({success: false, message: err.message}))
})

router.get('/all', (req, res) => {
    Result.find()
    .then((results) => res.json(results))
    .catch((err) => res.status(400).send({success: false, message: err.message}))
})

router.get('/', (req, res) => {
    if(!req.body.resultId) return res.status(404).send({success: false, message: "Invalied result id."})
    
    Result.findById(req.body.resultId)
    .then((result) => res.json(result))
    .catch((err) => res.status(400).send({success: false, message: err.message}))
})

router.put('/', (req, res) => {
    if(!req.body.resultId) return res.status(404).send({success: false, message: "Invalied result id"})
    
    Result.findByIdAndUpdate(req.body.resultId, req.body)
    .then(() => res.status(200).send({success: false, message: "result updated successfully"}))
    .catch((err) => res.status(400).send({success: false, message: err.message}))
})

router.delete('/', (req, res) => {
    if(!req.body.resultId) return res.status(404).send({success: false, message: "Invalied result id"})
    
    Result.findByIdAndDelete(req.body.resultId)
    .then(() =>res.status(200).send({success: false, message: "result deleted successfully"}))
    .catch((err) => res.status(400).send({success: false, message: err.message}))
})



export default router