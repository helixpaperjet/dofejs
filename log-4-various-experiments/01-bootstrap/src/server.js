const express = require("express")
const app = express()
const port = 3000
app.use(express.static("index.html"))
app.get("/", (req, res) => {
    res.type("text/javascript")
    res.sendFile(`${__dirname}/generateJsonData.js`)
})

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})