const express = require('express')
const app = express()
const port = process.env.PORT || 3030

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const morgan = require('morgan')
app.use(morgan('dev'))

const cors = require('cors')
app.use(cors())
app.disable('x-powered-by')

/*
    If you want a route to just test if your server is up and running,
    it's more commong to create a `/ping` route.
*/
app.get('/', (req, res, next) => {
    res.json({message:'hi'})
})

const userRouter = require('./routers/userRouter')
app.use('/api/users', userRouter)

const emojiRouter = require('./routers/emojiRouter')
app.use('/api/emoji', emojiRouter)

const storyRouter = require('./routers/storyRouter')
app.use('/api/stories', storyRouter)

app.use((req, res, next) => {
    const status = 404
    const message = `Could not find route matching: ${req.method} ${req.path}`
    next({ status, message })
  })

app.use((err, req, res, next) => {
    if (!process.env.NODE_ENV) console.log(err)
    const status = err.status || 500
    const message = err.message || 'Something went wrong!'
    res.status(status).json({ error: { message } })
  })


const listener = () => {console.log(`listening on port ${port}`)}
app.listen(port, listener)
