console.clear();
const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const dbConnection = require('./database/connection');
const productRoutes = require('./routes/productRoute');
dotEnv.config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;
dbConnection();


app.use('/api/v1/products',productRoutes);


app.listen(PORT , () => {
    console.log(`Server is Running On Port : ${PORT}`);
})


//Error handler Middleware

app.use((err , req , res , next) => {
    console.error(err.stack);
    res.status(500).send({
        status : 500,
        message : err.message,
        body : {}
    })
})
