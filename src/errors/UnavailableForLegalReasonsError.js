/**
 * 451 Unavailable For Legal Reasons
 * The HyperText Transfer Protocol (HTTP) 451 Unavailable For Legal Reasons client error response code
 * indicates that the user requested a resource that is not available due to legal reasons,
 * such as a web page for which a legal action has been issued.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451
 */

export class UnavailableForLegalReasonsError extends Error {
    constructor (errorMessage, errorCode = 451, errorTitle = 'Unavailable For Legal Reasons') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}