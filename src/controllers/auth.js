const { AuthService } = require('../services');
const { Response } = require('../helpers');

/**
 * @function registerUser
 * @description function to register user
 * @method POST
 * @param (req res)
 * @author Akshay Mondal
 */
exports.registerUser = async (req, res) => {
    try {
        const registerUser = await AuthService.registerUser(req);
        if (registerUser.success === true) {
            Response.successResponse(res, registerUser.success, registerUser.statuscode, registerUser.message, registerUser.data);
        } else {
            Response.errorResponse(res, registerUser.success, registerUser.statuscode, registerUser.message, registerUser.data);
        }
    } catch (error) {
        throw error
    }
}

/**
 * @function loginUser
 * @description function to login user
 * @method POST
 * @param (req res)
 * @author Akshay Mondal
 */
exports.loginUser = async (req, res) => {
    try {
        const loginUser = await AuthService.loginUser(req);
        if (loginUser.success === true) {
            Response.successResponse(res, loginUser.success, loginUser.statuscode, loginUser.message, loginUser.data);
        } else {
            Response.errorResponse(res, loginUser.success, loginUser.statuscode, loginUser.message, loginUser.data);
        }
    } catch (error) {
        throw error
    }
}