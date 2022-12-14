/**
 * 503 Service Unavailable
 * The HyperText Transfer Protocol (HTTP) 503 Service Unavailable server error response code
 * indicates that the server is not ready to handle the request.
 *
 * Common causes are a server that is down for maintenance or that is overloaded.
 * This response should be used for temporary conditions and the Retry-After HTTP header should,
 * if possible, contain the estimated time for the recovery of the service.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503
 */

export class ServiceUnavailableError extends Error {
    constructor (errorMessage, errorCode = 503, errorTitle = 'Service Unavailable') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}