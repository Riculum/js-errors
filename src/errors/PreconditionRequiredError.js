/**
 * 428 Precondition Required
 * The HTTP 428 Precondition Required response status code indicates that
 * the server requires the request to be conditional.
 *
 * Typically, this means that a required precondition header, such as If-Match, is missing.
 *
 * When a precondition header is not matching the server side state, the response should be 412 Precondition Failed-
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428
 */

export class PreconditionRequiredError extends Error {
    constructor (errorMessage, errorCode = 428, errorTitle = 'Precondition Required') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}