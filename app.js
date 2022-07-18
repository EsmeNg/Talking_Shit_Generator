const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTalkingShit = require('./generate_talking_shit')
const { type } = require('os')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.get('/', (req,res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    const checkItem = req.body.target
    const talkingShit = generateTalkingShit(req.body.target)
    res.render('index', {talkingShit, checkItem})
})
app.listen(port, (req,res) => {
    console.log('localhost:3000 is running.')
})