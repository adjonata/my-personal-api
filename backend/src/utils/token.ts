import jwt from "jsonwebtoken";

const create = (value: object, expiresIn: number = 7200): string => {
  return jwt.sign(value, String(process.env.SECRET), {
    expiresIn
  });
};

export { create };
