const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors');
const mongoose = require('mongoose');

const router = require('./routers/api.js');
const port = process.env.PORT || 80;
const hostname = process.env.HOST_NAME;
const mongodb = process.env.MONGODB_URL;

console.log(port + ' ' + hostname + ' ' + mongodb)

app.use(cors());
app.use('/api', router);



app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})