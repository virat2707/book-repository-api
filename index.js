const express = require('express');
const app = express();
const port = 9000;
const dashboardRouter = require('./routes/dashboard');

app.use('/', dashboardRouter);
app.use(express.urlencoded({extended: false}));



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});