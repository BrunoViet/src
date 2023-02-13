import pool from '../configs/migration/connectDB.js'
let edituser = async (req, res) => {
    let userId = req.params.id;
    let [user] = await pool.execute(`select * from users where id=?`, [userId]);
    return res.render('update.ejs', { dataUser: user[0] });
}
export default edituser