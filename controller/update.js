import pool from "../configs/migration/connectDB.js";
let updateUser = async (req, res) => {
    let { fullName, email, phoneNum, Type, Date, id } = req.body;
    await pool.execute(`update users set fullName=?, email=?, phoneNum=?, Type=?, Date=? where id=?`,
        [fullName, email, phoneNum, Type, Date, id]);
    return res.redirect('/booking-new');
}
export default updateUser
