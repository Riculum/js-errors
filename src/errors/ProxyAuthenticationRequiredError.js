/**
 * 407 Proxy Authentication Required
 * The HTTP 407 Proxy Authentication Required client error status response code indicates
 * that the request has not been applied because it lacks valid authentication credentials
 * for a proxy server that is between the browser and the server that can access the requested
 * resource.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407
 */

export class ProxyAuthenticationRequiredError extends Error {
    constructor (errorMessage, errorCode = 407, errorTitle = 'Proxy Authentication Required') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}