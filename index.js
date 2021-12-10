// express init
import express from 'express'
const app = express()
const port = 8888 || process.env.PORT

// routes
app.get('/', (req, res) => res.send('Hello World!'))

// start server
app.listen(port, () => console.log(`Server started on port ${port}`))
