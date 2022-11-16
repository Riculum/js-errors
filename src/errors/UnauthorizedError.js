/**
 * 401 Unauthorized
 * The HyperText Transfer Protocol (HTTP) 401 Unauthorized response status code
 * indicates that the client request has not been completed because it
 * lacks valid authentication credentials for the requested resource.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401
 */

export class UnauthorizedError extends Error {
    constructor (errorMessage, errorCode = 401, errorTitle = 'Unauthorized') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}