import { Router } from "express"
import bcrypt from "bcrypt"

import User from '../models/User.js'

const router = Router()

router.post('/register', async (req, res) => {

    const emailExists = await User.findOne({ email: req.body.email })
    if (emailExists) return res.status(400).send('Email already exists')

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) throw err
            
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: hash,
            })
            user.save()
            .then((user) => res.send({user: user._id}))
            .catch((err) => res.status(400).send(err))
        })
    })
})


router.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).send('Email does not exist')

    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) return res.status(400).send('Invalid password')

    res.send('Logged in')
})

export default router