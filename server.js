const express = require(express)

const app = express();

app.get('/', (res,res) => {
    res.render("hello")
})

app.listen(3000);