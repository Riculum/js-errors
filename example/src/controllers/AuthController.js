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