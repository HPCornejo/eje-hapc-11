const express = require("express");
const hbs = require('hbs');
const bodyParser = require("body-parser");
const port = process.env.port || 3000;

const app=express();

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials',()=>{});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/dashboard', (req,res) => {
    res.render('dashboard')
})

app.get('/login', (req,res) => {
    res.render('login')
})

app.get('*',(req,res) => {
    /*res.send('Aqui va el 404 por GET')*/
    res.render('404',{
        nombre: "Jose Luis",
        edad: "27"
    })
})

app.listen(port, () => {
    console.log("El servidor esta corriendo en el puerto: ",port);
});