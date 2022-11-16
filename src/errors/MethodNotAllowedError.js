/**
 * 405 Method Not Allowed
 * The HyperText Transfer Protocol (HTTP) 405 Method Not Allowed response status code
 * indicates that the server knows the request method, but the target resource
 * doesn't support this method.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
 */

export class MethodNotAllowedError extends Error {
    constructor (errorMessage, errorCode = 405, errorTitle = 'Method Not Allowed') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}