export class ErrorMiddleware {
    static handleError(err, req, res, next) {
        res.status(err.errorCode || 500).json({
            "error": err['errorTitle'] || "Internal Server Error",
            "detail": {
                "message": err.message,
                "timestamp": new Date(Date.now())
            }
        })

        next()
    }
}