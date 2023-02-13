import express from 'express';
import configengine from './public/views/viewengine.js';
import initWebroute from './route/web.js';
import bodyparser from 'body-parser';
const app = express();
const port = 3131;

//parse application
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//config view engine
configengine(app);

//init route
initWebroute(app);

app.listen(port, () => {
    console.log(`Server connecting http://localhost:${port}`);
})