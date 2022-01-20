const express = require('express');
const dotenv = require('dotenv');
const bootcamp_routes = require('./routes/bootcamps');
const logger = require('./middlewares/logger');
const mongoose = require('mongoose');

dotenv.config({path: './.env'});

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger);
app.use('/api/v1', bootcamp_routes);

const PORT = process.env.PORT || 3000;

const connect = async () => {
    await mongoose.connect(process.env.DB_URL)
        .then(db => {
            console.log('DB Connected')
        })
        .catch(e => {
            console.log('database error ',e);
        })

}

app.listen(
    PORT,
    async () => {
        console.log(`Server is running at ${PORT}`);
        await connect();
    }
)