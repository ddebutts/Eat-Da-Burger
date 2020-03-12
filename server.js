const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static('public'));

const hbs = require('express-handlebars');
app.engine('handlebars', hbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(require('./routes'));

app.listen(PORT, function(){
    console.log("Listening on PORT: ", PORT)
})