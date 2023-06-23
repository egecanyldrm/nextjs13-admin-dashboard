const express = require('express');
const app = express();
const dotenv = require('dotenv').config()
const cors = require('cors');
const multer = require('multer');
const mongoose = require('mongoose');
const path = require('path');
// const helmet = require("helmet");
// const rateLimit = require('express-rate-limit');

app.use(cors({
    origin: '*'
}));

// app.use(cors({
//     origin: ['qrpanel.kreatifdestek.com', 'https://qrpanel.kreatifdestek.com', 'qr.kreatifdestek.com', 'https://qr.kreatifdestek.com']
// }));




//Routes
const adminRoutes = require('./routes/admin');
const accountRoutes = require('./routes/account');
const customerRoutes = require('./routes/customer');
const ownerRoutes = require('./routes/owner');

// Error Page Controller
const errorPage = require('./controllers/errorPage')






// Apply the rate limiting middleware to all requests
// app.use(limiter)

//Parsers
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
//Cros Origin For Development
// app.use(
//     cors({
//         origin: true,
//         optionsSuccessStatus: 200,
//         credentials: true,
//     })
// );
// app.options(
//     '*',
//     cors({
//         origin: true,
//         optionsSuccessStatus: 200,
//         credentials: true,
//     })
// );



//Routing Processing 
app.use('/admin', adminRoutes);
app.use('/customer', customerRoutes);
app.use('/owner', ownerRoutes);
app.use(accountRoutes)
app.use(errorPage.get404Page)




//Database Connection

const port = process.env.PORT;

mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('connected to mongodb');
        app.listen(port)
    }).catch(err => { console.log(err) })
