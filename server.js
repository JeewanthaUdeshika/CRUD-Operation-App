// Here the html server is created
const express = require('express');
const dotenv = require('dotenv');       // For sake of  using .env file's variables
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

dotenv.config({path: 'config.env'});    // For secure the credentials
const PORT = process.env.PORT || 8080;  // Make the PORT variable

// Log request to get request details in the console
app.use(morgan('tiny'));
// Parse request to body-parser
app.use(bodyParser.urlencoded({extended: true}));
// Set view engine
app.set("view engine", "ejs");

// Load assets using path...here give name to the specified diectory
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));     // Now if we want to get access to the style.css file, we can use drectly css/style.css
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

// Load router file
app.use('/', require('./server/routes/routes'));

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});