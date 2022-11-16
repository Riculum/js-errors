/**
 * 402 Payment Required
 * The HTTP 402 Payment Required is a nonstandard response status code
 * that is reserved for future use. This status code was created to enable
 * digital cash or (micro) payment systems and would indicate that the
 * requested content is not available until the client makes a payment.
 *
 * Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402
 */

export class PaymentRequiredError extends Error {
    constructor (errorMessage, errorCode = 402, errorTitle = 'Payment Required') {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorTitle = errorTitle
    }
}