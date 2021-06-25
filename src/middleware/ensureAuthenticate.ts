import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
  sub: string;
}

export function ensureAuthenticate(request: Request, response: Response, next: NextFunction) {
  let authToken = request.headers.authorization;

  if(!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, process.env.SECRET_API) as IPayLoad;
    request.user_id = sub;
    return next();
  } catch (error) {
    return response.status(401).end();
  }
}