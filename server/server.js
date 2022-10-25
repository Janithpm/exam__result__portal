import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import AuthRoute from './routes/authRoute.js'
import UserRoute from './routes/userRoute.js'
import SubjectRoute from './routes/subjectRoute.js'
import ExamRoute from './routes/examRoute.js'
import ResultRoute from './routes/resultRoute.js'

dotenv.config()

mongoose.connect(process.env.DB_URL)
.then(() => console.log("database connection established"))
.catch((err) => console.log(err))

const app = express()


app.use(cors())

app.use(bodyParser.urlencoded({extended: true }))
app.use(bodyParser.json())

app.use('/', AuthRoute)
app.use('/user', UserRoute)
app.use('/subject', SubjectRoute)
app.use('/exam', ExamRoute)
app.use('/result', ResultRoute)

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}...`))