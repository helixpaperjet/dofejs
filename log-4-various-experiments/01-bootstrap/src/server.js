const express = require("express")
const app = express()
const port = 3000
app.use(express.static("index.html"))
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})