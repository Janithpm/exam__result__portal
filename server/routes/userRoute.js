import express from 'express'
import bcrypt from "bcrypt"

import User from '../models/User.js'

const router = express.Router()

router.post('/create', async (req, res) => {

    const emailExists = await User.findOne({ email: req.body.email })
    if (emailExists) return res.status(400).send('Email already exists')

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            
            if (err) throw err
            
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                userType: req.body.userType,
                password: hash,
            })
            user.save()
            .then((user) => res.send({user: user._id}))
            .catch((err) => res.status(400).send(err))
        })
    })
})

router.get('/all', (req, res) => {
    User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err))

})

router.get('/', (req, res) => {
    if(!req.body.userId) return res.status(400).send('Invalid user id')
    
    User.findById(req.body.userId)
    .then((user) => res.send(user))
    .catch((err) => res.status(400).send(err))
})

router.put('/', (req, res) => {
    if(!req.body.userId) return res.status(400).send('Invalid user id')
    
    User.findByIdAndUpdate(req.body.userId, req.body)
    .then((user) => res.status(200).send({message: 'User updated'}))
    .catch((err) => res.status(400).send(err))
})

router.delete('/', (req, res) => {
    if(!req.body.userId) return res.status(400).send('Invalid user id')
    
    User.findByIdAndDelete(req.body.userId)
    .then((user) => res.status(200).send({message: 'User deleted'}))
    .catch((err) => res.status(400).send(err))
})


export default router