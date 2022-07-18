// Local Imports
const { pool } = require('../database');
const { Constant } = require('../helpers');

/**
 * @function getUser
 * @description function to get user
 * @param (req)
 * @author Akshay Mondal
 */
exports.getUser = async (req) => {
    try {
        let query = `SELECT id, first_name, last_name, email, mobile, is_active FROM users WHERE is_active = true`
        if (req.params.id) query += ` AND id = '${req.params.id}'`;
        console.log(query)
        const userData = await pool.query(query);
        if (userData.rows.length === 0) return Constant.ERROR.USER_DATA_NOT_FOUND;
        Constant.SUCCESS.ALL_USER_DATA.data = userData.rows;
        return Constant.SUCCESS.ALL_USER_DATA;
    } catch (error) {
        Constant.ERROR.RETURN_ERROR.message = error.message.toString();
        Constant.ERROR.RETURN_ERROR.data = [];
        return Constant.ERROR.RETURN_ERROR;
    }
}

/**
 * @function updateUser
 * @description function to update user
 * @param (req)
 * @author Akshay Mondal
 */
exports.updateUser = async (req) => {
    try {
        if (!req.params.id) return Constant.ERROR.INSERT_ID
        let query = `UPDATE users SET`
        if (req.body.firstName) query += ` first_name = '${req.body.firstName}',`;
        if (req.body.lastName) query += ` last_name = '${req.body.lastName}',`;
        if (req.body.email) {
            const findUserByEmail = await pool.query(`SELECT * FROM users WHERE email ='${req.body.email}'`);
            if (findUserByEmail.rows.length > 0) return Constant.ERROR.EMAIL_EXISTS;
            query += ` email = '${req.body.email}'`;
        }
        if (req.body.mobile) {
            const findUserByMobile = await pool.query(`SELECT * FROM users WHERE mobile = '${req.body.mobile}'`);
            if (findUserByMobile.rows.length > 0) return Constant.ERROR.MOBILE_EXISTS;
            query += `, mobile = '${req.body.mobile}'`;
        }
        query += ` WHERE is_active = true AND id = '${req.params.id}'`;
        console.log(query)
        await pool.query(query);
        return Constant.SUCCESS.UPDATE_USER;
    } catch (error) {
        Constant.ERROR.RETURN_ERROR.message = error.message.toString();
        Constant.ERROR.RETURN_ERROR.data = [];
        return Constant.ERROR.RETURN_ERROR;
    }
}