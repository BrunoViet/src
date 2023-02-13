import pool from "../configs/migration/connectDB.js";
let getHomepage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    return res.render('booking.ejs', { dataUser: rows });
}
export default getHomepage
