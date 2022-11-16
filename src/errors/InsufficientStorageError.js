/**
 * 507 Insufficient Storage
 * The HyperText Transfer Protocol (HTTP) 507 Insufficient Storage response status code
 * may be given in the context of the Web Distributed Authoring and Versioning (WebDAV)
 * protocol (see RFC 4918).
 *
 * It indicates that a method could not be performed because the server
 * cannot store the representation needed to successfully complete the request.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507
 */

export class InsufficientStorageError extends Error {
    constructor (errorMessage, errorCode = 507, errorTitle = 'Insufficient Storage') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}