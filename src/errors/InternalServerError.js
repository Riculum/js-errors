/**
 * 500 Internal Server Error
 * The HyperText Transfer Protocol (HTTP) 500 Internal Server Error
 * server error response code indicates that the server encountered
 * an unexpected condition that prevented it from fulfilling the request.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500
 */

export class InternalServerError extends Error {
    constructor (errorMessage, errorCode = 500, errorTitle = 'Internal Server Error') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}