const express = require("express")
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("backend prêt")
})
app.get("/api/test", (req, res) => {
    return res.send("404 mdr")
})