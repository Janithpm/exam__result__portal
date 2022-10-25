import express from 'express'

import Subject from '../models/Subject.js'

const router = express.Router()

router.post('/create', (req, res) => {
    const newSubject = new Subject({
        name: req.body.name,
        description: req.body.description,
        credits: req.body.credits
    })

    newSubject.save()
    .then(() => res.status(200).send({success: true, message: 'Subject created successfully'}))
    .catch(err => res.status(400).send({success: false, message: err.message}))
})

router.get('/all', (req, res) => {
    Subject.find()
    .then((subjects) => res.json(subjects))
    .catch((err) => res.status(400).send({success: false, message: err.message}))
})

router.get('/', (req, res) => {
    if(!req.body.subjectId) return res.status(404).send({success: false, message: "Invalied subject"})
    
    Subject.findById(req.body.subjectId)
    .then((subjects) => res.json(subjects))
    .catch((err) => res.status(400).send({success: false, message: err.message}))
})

router.put('/', (req, res) => {
    if(!req.body.subjectId) return res.status(404).send({success: false, message: "Invalied subject"})
    
    Subject.findByIdAndUpdate(req.body.subjectId, req.body)
    .then(() => res.status(200).send({success: false, message: "subject updated successfully"}))
    .catch((err) => res.status(400).send({success: false, message: err.message}))
})

router.delete('/', (req, res) => {
    if(!req.body.subjectId) return res.status(404).send({success: false, message: "Invalied subject"})
    
    Subject.findByIdAndDelete(req.body.subjectId)
    .then(() =>res.status(200).send({success: false, message: "subject deleted successfully"}))
    .catch((err) => res.status(400).send({success: false, message: err.message}))
})



export default router