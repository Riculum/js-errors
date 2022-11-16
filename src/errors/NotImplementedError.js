/**
 * 501 Not Implemented
 * The HyperText Transfer Protocol (HTTP) 501 Not Implemented server error response code means
 * that the server does not support the functionality required to fulfill the request.
 *
 * 501 is the appropriate response when the server does not recognize the request method
 * and is incapable of supporting it for any resource. The only methods that servers
 * are required to support (and therefore that must not return 501) are GET and HEAD
 *
 * If the server does recognize the method, but intentionally does not support it,
 * the appropriate response is 405 Method Not Allowed.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501
 */

export class NotImplementedError extends Error {
    constructor (errorMessage, errorCode = 501, errorTitle = 'Not Implemented') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}