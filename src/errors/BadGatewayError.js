/**
 * 502 Bad Gateway
 * The HyperText Transfer Protocol (HTTP) 502 Bad Gateway server error response code
 * indicates that the server, while acting as a gateway or proxy, received
 * an invalid response from the upstream server.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502
 */

export class BadGatewayError extends Error {
    constructor (errorMessage, errorCode = 502, errorTitle = 'Bad Gateway') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}