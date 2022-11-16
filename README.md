# JS-Errors
A simple middleware for handling HTTP errors

##  Install
```
npm install @riculum/js-errors
```

## Example

Have a look at [examples](https://github.com/Riculum/js-errors/tree/main/example)

**RouterMiddleware**
```
import express from "express"
import AuthController from "../controllers/AuthController.js";
import {ErrorMiddleware, NotFoundError} from "@riculum/js-errors"

const router = express.Router()

//Define all routes
router.post('/login', AuthController.login)
router.post('/logout', AuthController.logout)

//Throw an error if the URL cannot be resolved
router.use((req, res, next) => {
    next(new NotFoundError("The requested url was not found on this server"))
})

//Handles all errors that are passed downwards
router.use(ErrorMiddleware.handleError)

export default router
```

**AuthController**
```
import {UnauthorizedError} from "@riculum/js-errors"

export default class AuthController {
    static async login(req, res, next) {
        try {
            const {email, password} = req.body

            //Check if user exists
            if (!email || !password) {
                throw new UnauthorizedError("email or password are missing")
            }

        } catch (e) {
            //Passing the exception to Error handling
            next(e)
        }
    }

    static logout(req, res, next) {
        try {
            //Do stuff
        } catch (e) {
            //Passing the exception to Error handling
            next(e)
        }
    }
}
```

## List of all errors
| Status Code | Error                         |
|-------------|-------------------------------|
| 400         | BadRequest                    |
| 401         | Unauthorized                  |
| 402         | PaymentRequired               |
| 403         | Forbidden                     |
| 404         | NotFound                      |
| 405         | MethodNotAllowed              |
| 406         | NotAcceptable                 |
| 407         | ProxyAuthenticationRequired   |
| 408         | RequestTimeout                |
| 409         | Conflict                      |
| 410         | Gone                          |
| 411         | LengthRequired                |
| 412         | PreconditionFailed            |
| 413         | PayloadTooLarge               |
| 414         | URITooLong                    |
| 415         | UnsupportedMediaType          |
| 416         | RangeNotSatisfiable           |
| 417         | ExpectationFailed             |
| 418         | ImATeapot                     |
| 422         | UnprocessableEntity           |
| 425         | TooEarly                      |
| 426         | UpgradeRequired               |
| 428         | PreconditionRequired          |
| 429         | TooManyRequests               |
| 431         | RequestHeaderFieldsTooLarge   |
| 451         | UnavailableForLegalReasons    |
| 500         | InternalServerError           |
| 501         | NotImplemented                |
| 502         | BadGateway                    |
| 503         | ServiceUnavailable            |
| 504         | GatewayTimeout                |
| 505         | HTTPVersionNotSupported       |
| 506         | VariantAlsoNegotiates         |
| 507         | InsufficientStorage           |
| 508         | LoopDetected                  |
| 510         | NotExtended                   |
| 511         | NetworkAuthenticationRequired |

## Bugreport & Contribution
If you find a bug, please either create a ticket in GitHub, or initiate a pull request

## Versioning
We adhere to semantic (major.minor.patch) versioning (https://semver.org/). This means that:

* Patch (x.x.patch) versions fix bugs
* Minor (x.minor.x) versions introduce new, backwards compatible features or improve existing code.
* Major (major.x.x) versions introduce radical changes which are not backwards compatible.

In your automation or procedure you can always safely update patch & minor versions without the risk of your application failing.
