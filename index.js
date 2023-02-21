import express from  'express';
import bodyParser from 'body-parser';

const app = express()
const port = 3000

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
  extended: true,
}))

app.get('/', (req, res) => {
  res.json(`App running on port ${port}`)
})

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
