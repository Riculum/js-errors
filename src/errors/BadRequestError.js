/**
 * 400 Bad Request
 * The HyperText Transfer Protocol (HTTP) 400 Bad Request response status code
 * indicates that the server cannot or will not process the request due to something
 * that is perceived to be a client error (for example, malformed request syntax,
 * invalid request message framing, or deceptive request routing).
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400
 */

export class BadRequestError extends Error {
    constructor (errorMessage, errorCode = 400, errorTitle = 'Bad Request') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}