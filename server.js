const express = require("express")

const app = express()

const port = 4000

app.get("/get-msg", async (req, res) => {
    return res.json({
        message: "Sending message from server",
        status: true
    })
})

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})