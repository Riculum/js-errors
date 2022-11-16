/**
 * 410 Gone
 * The HyperText Transfer Protocol (HTTP) 410 Gone client error response code indicates
 * that access to the target resource is no longer available at the origin server
 * and that this condition is likely to be permanent.
 *
 * If you don't know whether this condition is temporary or permanent,
 * a 404 status code should be used instead.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410
 */

export class GoneError extends Error {
    constructor (errorMessage, errorCode = 410, errorTitle = 'Gone') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}