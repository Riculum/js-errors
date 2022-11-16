/**
 * 418 I'm a teapot
 * The HTTP 418 I'm a teapot client error response code indicates that the server refuses
 * to brew coffee because it is, permanently, a teapot. A combined coffee/tea pot that is temporarily out of coffee
 * should instead return 503. This error is a reference to Hyper Text Coffee Pot Control Protocol defined
 * in April Fools' jokes in 1998 and 2014.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418
 */

export class ImATeapotError extends Error {
    constructor (errorMessage, errorCode = 418, errorTitle = "I'm a teapot") {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}