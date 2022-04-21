require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./app/router.js');

const PORT = process.env.PORT || 3333;
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.use('/statics', express.static('statics'));

app
    .use(router)
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(cors());

app.listen(PORT, () => {
    console.log('Listening on http://localhost:' + PORT);
});
