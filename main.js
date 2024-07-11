const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 8080;

app.use(cors());
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});
app.use('/js', express.static(__dirname + '/js/'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});