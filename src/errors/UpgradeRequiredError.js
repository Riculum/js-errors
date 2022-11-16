/**
 * 426 Upgrade Required
 * The HTTP 426 Upgrade Required client error response code indicates that the server refuses
 * to perform the request using the current protocol but might be willing to do so
 * after the client upgrades to a different protocol.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426
 */

export class UpgradeRequiredError extends Error {
    constructor (errorMessage, errorCode = 426, errorTitle = 'Upgrade Required') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}