import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.header["authorization"];
  const Token = authHeader && authHeader.split[" "];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(Token, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.email = decode.email;
    next();
  });
};
