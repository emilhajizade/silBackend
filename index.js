const express = require('express')
const app = express()
var cors = require('cors')


const port = 3000
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.post('/', (req, res) => {
    res.send('Got a POST request')
  })
  
  app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
  })
  
  app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})