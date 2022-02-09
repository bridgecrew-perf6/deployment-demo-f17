// Setting up server

const express = require('express')
const cors = require('cors')
const path = require('path') // build into node, needed to import bigger files

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))//__dirname (auto populate from heroku) is directory name. joining directory name with index.html in this case
})

// heroku might not have 4000 or whatever port we choose
const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})