const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500    // Set a status code from the controller. If no status code, then server error
    res.status(statusCode)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,     // In production mode, don't show the error stack trace, which provides us with line nos, etc
    })
}

module.exports = {
    errorHandler,
}