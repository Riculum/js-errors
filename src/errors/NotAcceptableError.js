/**
 * 406 Not Acceptable
 * The HyperText Transfer Protocol (HTTP) 406 Not Acceptable client error response code indicates
 * that the server cannot produce a response matching the list of acceptable values defined in
 * the request's proactive content negotiation headers, and that the server is unwilling to supply
 * a default representation.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406
 */

export class NotAcceptableError extends Error {
    constructor (errorMessage, errorCode = 406, errorTitle = 'Not Acceptable') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}