import About, { IAbout } from "../models/about.model";
import { Request, Response } from "express";

export default {
  async getter(request: Request, response: Response) {
    return await About.findOne()
      .sort({ '_id': -1 })
      .then(res => {
        if (!res) {
          return response.status(400).json({
            msg: "Not found"
          });
        }

        return response.status(200).json(res);
      })
      .catch(err => {
        return response.status(500).json(err);
      });
  },

  async create(request: Request, response: Response) {
    const { description, knowledges }: IAbout = request.body;

    return await About.create({
      description,
      knowledges
    })
      .then(res => {
        return response.status(200).json(res);
      })
      .catch(err => {
        return response.status(500).json(err);
      });
  }
};
