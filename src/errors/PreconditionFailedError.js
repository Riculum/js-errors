/**
 * 412 Precondition Failed
 * The HyperText Transfer Protocol (HTTP) 412 Precondition Failed client error response code indicates
 * that access to the target resource has been denied. This happens with conditional requests on methods
 * other than GET or HEAD when the condition defined by the If-Unmodified-Since or If-None-Match headers
 * is not fulfilled. In that case, the request, usually an upload or a modification of a resource,
 * cannot be made and this error response is sent back.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412
 */

export class PreconditionFailedError extends Error {
    constructor (errorMessage, errorCode = 412, errorTitle = 'Precondition Failed') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}