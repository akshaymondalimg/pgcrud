// Global Imports
const JWT = require('jsonwebtoken');

// Local Imports
const { EnvConfig } = require('../config');

/**
 * @function createToken
 * @description function to generate token
 * @param (key)
 * @author Akshay Mondal
 */
exports.createToken = async (key) => {
    try {
        return JWT.sign(key, EnvConfig.CONST_CREDENTIALS.AUTH_SECRET);
    } catch (error) {
        throw error
    }
}
