const express = require('express');

//carregará por padrão o index.js
const routes = require("./routes")

const app = express();

//informando para a API qual o tipo de dado que ela receberá
app.use(express.json());

app.use(routes);

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));