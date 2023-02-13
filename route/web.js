import express from 'express'
import CreatUser from '../controller/creatuser.js';
import deleteuser from '../controller/deleteuser.js';
import getDetailpage from '../controller/detailpage.js';
import edituser from '../controller/edit.js';
import getHomepage from '../controller/homecontroller.js';
import updateUser from '../controller/update.js';

let router = express.Router();
const initWebroute = (app) => {
    router.get('/', getHomepage);
    router.get('/booking-new', getDetailpage);
    router.post('/creat-new-user', CreatUser);
    router.get('/edit-user/:id', edituser)
    router.post('/update-user', updateUser)
    router.post('/delete', deleteuser)
    return app.use('/', router);
}
export default initWebroute;