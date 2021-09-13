const express = require("express");
const app = express();

const db = require('./models')

const routes = require('./routes/routes')

app.use(express.json())
app.use('/', routes)

let portNo = 5050 || process.env.PORT

db.sequelize.sync().then(() => {
    app.listen(portNo, console.log(`The App is running on http://localhost:${portNo}`))
}).catch(err => console.log(err))