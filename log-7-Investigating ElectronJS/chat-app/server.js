const express = require("express")
const app = express()
app.use(express.static("public"))
const port = 3000


app.get("/", (req, res) => {
        res.sendFile(`${__dirname}/public/pages/main.html`)
})
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port.toString()}`)
})