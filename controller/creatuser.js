import pool from "../configs/migration/connectDB.js";
let CreatUser = async (req, res) => {
    let { fullName, email, phoneNum, Type, Date } = req.body;
    await pool.execute('INSERT INTO users(fullName,email,phoneNum,Type,Date) VALUES (?,?,?,?,?)',
        [fullName, email, phoneNum, Type, Date]);
    return res.redirect('/booking-new');
}
export default CreatUser
