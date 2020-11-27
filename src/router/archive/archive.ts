import { RequestHandler } from 'express';

const msg: String = 'GET /archive/';

const test: RequestHandler = (req, res, next) => {
  res.send(msg);
  return next();
};

export default test;
