const { UserService } = require('../services');
const { Response } = require('../helpers');

/**
 * @function getUser
 * @description function to get user
 * @method GET
 * @param (req res)
 * @author Akshay Mondal
 */
exports.getUser = async (req, res) => {
    try {
        const getUser = await UserService.getUser(req);
        if (getUser.success === true) {
            Response.successResponse(res, getUser.success, getUser.statuscode, getUser.message, getUser.data);
        } else {
            Response.errorResponse(res, getUser.success, getUser.statuscode, getUser.message, getUser.data);
        }
    } catch (error) {
        throw error
    }
}

/**
 * @function updateUser
 * @description function to get user
 * @method GET
 * @param (req res)
 * @author Akshay Mondal
 */
exports.updateUser = async (req, res) => {
    try {
        const updateUser = await UserService.updateUser(req);
        if (updateUser.success === true) {
            Response.successResponse(res, updateUser.success, updateUser.statuscode, updateUser.message, updateUser.data);
        } else {
            Response.errorResponse(res, updateUser.success, updateUser.statuscode, updateUser.message, updateUser.data);
        }
    } catch (error) {
        throw error
    }
}