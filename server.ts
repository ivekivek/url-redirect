const express = require('express');

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get("/", (req: any, res: any) => {
    let link = req.query.id
    console.log(link)
    res.redirect(link)
})

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});