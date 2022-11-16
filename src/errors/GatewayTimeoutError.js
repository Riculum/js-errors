/**
 * 504 Gateway Timeout
 * The HyperText Transfer Protocol (HTTP) 504 Gateway Timeout server error response code
 * indicates that the server, while acting as a gateway or proxy, did not get a response
 * in time from the upstream server that it needed in order to complete the request.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504
 */

export class GatewayTimeoutError extends Error {
    constructor (errorMessage, errorCode = 504, errorTitle = 'Gateway Timeout') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}