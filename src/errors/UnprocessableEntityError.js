/**
 * 422 Unprocessable Entity
 * The HyperText Transfer Protocol (HTTP) 422 Unprocessable Entity response status code indicates
 * that the server understands the content type of the request entity,
 * and the syntax of the request entity is correct, but it was unable to process the contained instructions.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422
 */

export class UnprocessableEntityError extends Error {
    constructor (errorMessage, errorCode = 422, errorTitle = 'Unprocessable Entity') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}