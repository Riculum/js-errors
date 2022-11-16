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