const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 4000;




//view

app.set('views','./source/views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));

//route

const route = require('./source/routes/route.js');

app.use('/', route);
app.use('/search', route);


app.listen(port, ()=>{
    console.log('server started');
})