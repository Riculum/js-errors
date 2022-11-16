/**
 * 425 Too Early
 * The HyperText Transfer Protocol (HTTP) 425 Too Early response status code indicates
 * that the server is unwilling to risk processing a request that might be replayed,
 * which creates the potential for a replay attack.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425
 */

export class TooEarlyError extends Error {
    constructor (errorMessage, errorCode = 425, errorTitle = 'Too Early') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}