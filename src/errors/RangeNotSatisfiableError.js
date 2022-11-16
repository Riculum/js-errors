/**
 * 416 Range Not Satisfiable
 * The HyperText Transfer Protocol (HTTP) 416 Range Not Satisfiable error response code indicates
 * that a server cannot serve the requested ranges. The most likely reason is that the document
 * doesn't contain such ranges, or that the Range header value, though syntactically correct, doesn't make sense.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416
 */

export class RangeNotSatisfiableError extends Error {
    constructor (errorMessage, errorCode = 416, errorTitle = 'Range Not Satisfiable') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}