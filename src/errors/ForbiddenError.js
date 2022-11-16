/**
 * 403 Forbidden
 * The HTTP 403 Forbidden response status code indicates
 * that the server understands the request but refuses to authorize it.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403
 */

export class ForbiddenError extends Error {
    constructor (errorMessage, errorCode = 403, errorTitle = 'Forbidden') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}