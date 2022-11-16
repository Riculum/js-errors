/**
 * 413 Payload Too Large
 * The HTTP 413 Payload Too Large response status code indicates
 * that the request entity is larger than limits defined by server;
 * the server might close the connection or return a Retry-After header field.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413
 */

export class PayloadTooLargeError extends Error {
    constructor (errorMessage, errorCode = 413, errorTitle = 'Payload Too Large') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}