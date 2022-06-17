// Here the html server is created
const express = require('express');
const app = express();

// Make the PORT
const PORT = process.env.PORT || 8080;

app.get('/', (req, res)=>{
    res.send("CRUD Application");
});

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});