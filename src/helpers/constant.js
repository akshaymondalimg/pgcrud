exports.STATUS_CODE = {
    OK: 200,
    INTERNAL_SERVER_ERROR: 500,
    UNAUTHORISED: 401,
    BADREQUEST: 400,
    NOTFOUND: 404
};

exports.SUCCESS = {
    INSERT_USER: {
        statuscode: this.STATUS_CODE.OK,
        success: true,
        message: "User inserted successfully!"
    },
    LOGIN_USER: {
        statuscode: this.STATUS_CODE.OK,
        success: true,
        message: "User login successfully!"
    },
    ALL_USER_DATA: {
        statuscode: this.STATUS_CODE.OK,
        success: true,
        message: "All user data!"
    },
    UPDATE_USER: {
        statuscode: this.STATUS_CODE.OK,
        success: true,
        message: "User update successfully!"
    },
};

exports.ERROR = {
    RETURN_ERROR: {
        statuscode: this.STATUS_CODE.INTERNAL_SERVER_ERROR,
        success: false
    },
    EMAIL_EXISTS: {
        statuscode: this.STATUS_CODE.BADREQUEST,
        success: false,
        message: "Email already exists!"
    },
    MOBILE_EXISTS: {
        statuscode: this.STATUS_CODE.BADREQUEST,
        success: false,
        message: "Mobile already exists!"
    },
    CONFIRM_PASSWORD_NOT_MATCH: {
        statuscode: this.STATUS_CODE.BADREQUEST,
        success: false,
        message: "Confirm password not match!"
    },
    EMAIL_NOT_FOUND: {
        statuscode: this.STATUS_CODE.NOTFOUND,
        success: false,
        message: "Email not found!"
    },
    INVALID_CREDENTIALS: {
        statuscode: this.STATUS_CODE.BADREQUEST,
        success: false,
        message: "Invalid credentials!"
    },
    USER_DATA_NOT_FOUND: {
        statuscode: this.STATUS_CODE.NOTFOUND,
        success: false,
        message: "User data not found!"
    },
    INSERT_ID: {
        statuscode: this.STATUS_CODE.BADREQUEST,
        success: false,
        message: "Please provide an id!"
    }
};