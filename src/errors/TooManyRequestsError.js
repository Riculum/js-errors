/**
 * 429 Too Many Requests
 * The HTTP 429 Too Many Requests response status code indicates
 * the user has sent too many requests in a given amount of time ("rate limiting").
 *
 * A Retry-After header might be included to this response indicating
 * how long to wait before making a new request.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429
 */

export class TooManyRequestsError extends Error {
    constructor (errorMessage, errorCode = 429, errorTitle = 'Too Many Requests') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}