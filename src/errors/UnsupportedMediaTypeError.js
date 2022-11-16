/**
 * 415 Unsupported Media Type
 * The HTTP 415 Unsupported Media Type client error response code indicates
 * that the server refuses to accept the request because the payload format
 * is in an unsupported format.
 *
 * The format problem might be due to the request's indicated Content-Type
 * or Content-Encoding, or as a result of inspecting the data directly.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415
 */

export class UnsupportedMediaTypeError extends Error {
    constructor (errorMessage, errorCode = 415, errorTitle = 'Unsupported Media Type') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}