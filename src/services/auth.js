// Global Imports
const bcrypt = require('bcrypt');

// Local Imports
const { pool } = require('../database');
const { Constant } = require('../helpers');
const { CreateToken } = require('../middlewares')

/**
 * @function registerUser
 * @description function to register user
 * @param (req)
 * @author Akshay Mondal
 */
exports.registerUser = async (req) => {
    try {
        const findUserByEmail = await pool.query(`SELECT * FROM users WHERE email ='${req.body.email}'`);
        if (findUserByEmail.rows.length > 0) return Constant.ERROR.EMAIL_EXISTS;
        const findUserByMobile = await pool.query(`SELECT * FROM users WHERE mobile = '${req.body.mobile}'`);
        if (findUserByMobile.rows.length > 0) return Constant.ERROR.MOBILE_EXISTS;
        if (req.body.password === req.body.confirmPassword) {
            const salt = await bcrypt.genSalt(12);
            const hashPassword = await bcrypt.hash(req.body.password, salt);
            const query = `INSERT INTO  users (first_name, last_name, email, mobile, password)  VALUES  ('${req.body.firstName}', '${req.body.lastName}', '${req.body.email}', '${req.body.mobile}', '${hashPassword}')  RETURNING id`
            const insertUser = await pool.query(query);
            Constant.SUCCESS.INSERT_USER.data = insertUser.rows[0];
            return Constant.SUCCESS.INSERT_USER;
        } else {
            return Constant.ERROR.CONFIRM_PASSWORD_NOT_MATCH;
        }
    } catch (error) {
        Constant.ERROR.RETURN_ERROR.message = error.message.toString();
        Constant.ERROR.RETURN_ERROR.data = [];
        return Constant.ERROR.RETURN_ERROR;
    }
}

/**
 * @function loginUser
 * @description function to login user
 * @param (req)
 * @author Akshay Mondal
 */
exports.loginUser = async (req) => {
    try {
        let findUserByEmail = await pool.query(`SELECT * FROM users WHERE email ='${req.body.email}'`);
        if (findUserByEmail.rows.length === 0) return Constant.ERROR.INVALID_CREDENTIALS;
        if (req.body.password && await bcrypt.compare(req.body.password, findUserByEmail.rows[0].password)) {
            const token = await CreateToken.createToken({
                firstName: findUserByEmail.rows[0].first_name,
                lastName: findUserByEmail.rows[0].last_name,
                email: findUserByEmail.rows[0].email,
                mobile: findUserByEmail.rows[0].mobile
            });
            delete findUserByEmail.rows[0].password;
            delete findUserByEmail.rows[0].timestamp;
            findUserByEmail.rows[0].token = token;
            Constant.SUCCESS.LOGIN_USER.data = findUserByEmail.rows[0];
            return Constant.SUCCESS.LOGIN_USER;
        } else {
            return Constant.ERROR.INVALID_CREDENTIALS;
        }
    } catch (error) {
        Constant.ERROR.RETURN_ERROR.message = error.message.toString();
        Constant.ERROR.RETURN_ERROR.data = [];
        return Constant.ERROR.RETURN_ERROR;
    }
}