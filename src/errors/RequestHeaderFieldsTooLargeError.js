/**
 * 431 Request Header Fields Too Large
 * The HTTP 431 Request Header Fields Too Large response status code indicates
 * that the server refuses to process the request because the request's
 * HTTP headers are too long. The request may be resubmitted after reducing
 * the size of the request headers.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431
 */

export class RequestHeaderFieldsTooLargeError extends Error {
    constructor (errorMessage, errorCode = 431, errorTitle = 'Request Header Fields Too Large') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}