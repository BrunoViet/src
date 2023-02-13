import pool from "../configs/migration/connectDB.js";
let getDetailpage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    return res.render('infousers.ejs', { dataUser: rows })
}
export default getDetailpage