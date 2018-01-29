const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const productsRoutes = require('./Serve/Routes/routesProducts');

// Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ecommerce',{
}).then(()=>{
    console.log("Conectado a la base de datos");
}).catch((err)=>{
    console.log("Error al conectarse a la base de datos");
});

// Settings
app.set('port',process.env.PORT || 3000);

// Middle wares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Routes
app.use('/api',productsRoutes);

// Static files
// app.use(express.static(path.join(__dirname,'Client/dist')));

// Start server
app.listen(app.get('port'),()=>{
    console.log("Server on port",app.get('port'));
});