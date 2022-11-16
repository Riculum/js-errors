/**
 * 409 Conflict
 * The HTTP 409 Conflict response status code indicates
 * a request conflict with the current state of the target resource.
 *
 * Conflicts are most likely to occur in response to a PUT request.
 * For example, you may get a 409 response when uploading a file
 * that is older than the existing one on the server, resulting in
 * a version control conflict.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409
 */

export class ConflictError extends Error {
    constructor (errorMessage, errorCode = 409, errorTitle = 'Conflict') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}