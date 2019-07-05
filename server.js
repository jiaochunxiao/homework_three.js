const express = require('express');

const app = express();

app.use('/', express.static('public'));
app.use('*', (req, res, next) => {
    next();
});

app.listen(4321);