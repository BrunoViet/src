import pool from '../configs/migration/connectDB.js'
let deleteuser = async (req, res) => {
    let userId = req.body.userId;
    await pool.execute('delete from users where id=?', [userId])
    return res.redirect('/booking-new');
    console.log('check');
}
export default deleteuser;