/**
 * 417 Expectation Failed
 * The HTTP 417 Expectation Failed client error response code indicates
 * that the expectation given in the request's Expect header could not be met.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417
 */

export class ExpectationFailedError extends Error {
    constructor (errorMessage, errorCode = 417, errorTitle = 'Expectation Failed') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}