const express = require('express')
const app = express()
const cors = require('cors')
const handler = require('express-async-handler')
const port = 5000

app.use(cors())

app.get('/api/smurf', handler(async(req, res) => {
    res.json({msg: "girls wanna have fun"})
}))

app.listen(port, () => {
    console.log(`your server is now running on port ${port}`);
})