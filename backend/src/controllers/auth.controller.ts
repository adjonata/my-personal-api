import { Request, Response } from "express";
import Auth, { IAuth } from "../models/auth.model";
import * as crypts from "../utils/crypts";
import * as token from "../utils/token";

export default {
  async getter(request: Request, response: Response) {
    return await Auth.find()
      .then(users => response.status(200).json(users))
      .catch(err => response.status(500).json(err));
  },
  async login(request: Request, response: Response) {
    const { email, password }: IAuth = request.body;

    return await Auth.findOne({ email })
      .then(async user => {
        if (!user) {
          return response.status(400).json({
            msg: "User not found"
          });
        }

        const comparePasswords = await crypts.compare(password, user.password);

        if (comparePasswords) {
          const userInfo = {
            id: user.id,
            email: user.email
          };

          const authorization = token.create(userInfo);

          return response.status(200).json({
            authorization,
            userInfo
          });
        } else {
          return response.status(400).json({ msg: "Invalid password" });
        }
      })
      .catch(err => {
        return response.status(500).json(err);
      });
  },

  async register(request: Request, response: Response) {
    const { email, password }: IAuth = request.body;

    const findInDB = await Auth.findOne({ email }).exec();
    if (findInDB) {
      return response.status(403).json({
        msg: "Email already registered"
      });
    }

    return await crypts
      .generate(password)
      .then(async (passwordHash: string) => {
        return await Auth.create({
          email,
          password: passwordHash
        }).then(user => {
          const userInfo = {
            id: user.id,
            email: user.email
          };

          return response.status(200).json(userInfo);
        });
      })
      .catch(err => response.status(500).json(err));
  },

  /**
   * Delete User
   */
  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const query = {
      _id: id
    };

    const count = await Auth.count({}).exec();

    if (count < 2) {
      return response.status(401).json({
        msg: "Minimum number of registered users!"
      });
    }

    return await Auth.findOneAndDelete(query)
      .then(res => response.status(200).json({ msg: "Success in delete" }))
      .catch(err => response.status(400).json({ msg: "User not found" }));
  }
};
