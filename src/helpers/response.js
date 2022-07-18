exports.successResponse = (res, success, status, message, data = []) => {
    return res.status(status).json({
        success,
        status,
        message,
        data
    });
};

exports.errorResponse = (res, success, status, message, data = []) => {
    return res.status(status).json({
        success,
        status,
        message,
        data
    });
};

exports.errorResponseUnauth = (res, success, status, message, data = []) => {
    return res.status(status).json({
        success,
        status,
        message,
        data
    });
};