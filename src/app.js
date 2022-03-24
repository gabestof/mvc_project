const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const mainRouter = require("./routes/mainRoutes")

app.use(express.static(path.join(__dirname, "../", "public")));

app.use("/", mainRouter);



app.listen(port, () => console.log('Servidor Funcionando'))