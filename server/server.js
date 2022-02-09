// Setting up server

const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())




const server = 4000
app.listen(server, () => {
    console.log('server running on port 4000')
})