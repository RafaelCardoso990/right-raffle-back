import { Request, Response, NextFunction } from 'express';

export default function errorHandlerMiddleware(Error: any, req: Request, res: Response, next: NextFunction) {
    console.log(Error)
    if (Error.response) return res.sendStatus(Error.response.status)
    if (Error.status) return res.status(Error.status).send(Error.message)
    res.status(500).send(Error)
};