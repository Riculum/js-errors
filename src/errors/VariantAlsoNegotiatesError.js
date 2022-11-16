/**
 * 506 Variant Also Negotiates
 * The HyperText Transfer Protocol (HTTP) 506 Variant Also Negotiates response status code
 * may be given in the context of Transparent Content Negotiation (see RFC 2295).
 * This protocol enables a client to retrieve the best variant of a given resource,
 * where the server supports multiple variants.
 *
 * The Variant Also Negotiates status code indicates an internal server configuration error
 * in which the chosen variant is itself configured to engage in content negotiation,
 * so is not a proper negotiation endpoint.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506
 */

export class VariantAlsoNegotiatesError extends Error {
    constructor (errorMessage, errorCode = 506, errorTitle = 'Variant Also Negotiates') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}