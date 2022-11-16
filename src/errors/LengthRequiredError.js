/**
 * 411 Length Required
 * The HyperText Transfer Protocol (HTTP) 411 Length Required client error response code
 * indicates that the server refuses to accept the request without a defined Content-Length header.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411
 */

export class LengthRequiredError extends Error {
    constructor (errorMessage, errorCode = 411, errorTitle = 'Length Required') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}