/**
 * 408 Request Timeout
 * The HyperText Transfer Protocol (HTTP) 408 Request Timeout response status code
 * means that the server would like to shut down this unused connection.
 * It is sent on an idle connection by some servers, even without any
 * previous request by the client.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408
 */

export class RequestTimeoutError extends Error {
    constructor (errorMessage, errorCode = 408, errorTitle = 'Request Timeout') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}