import { Request, Response } from "express";
import Socials, { ISocial } from "../models/social.model";

export default {
  /**
   * Get all Socials
   */
  async getter(request: Request, response: Response) {
    return await Socials.find()
      .then(res => {
        if (!res) {
          return response.status(400).json({
            msg: "Is Empty"
          });
        }

        return response.status(200).json(res);
      })
      .catch(err => response.status(500).json(err));
  },

  /**
   * Create Social
   */
  async create(request: Request, response: Response) {
    const { link, title, image }: ISocial = request.body;

    return await Socials.create({ link, title, image })
      .then(res => response.status(200).json(res))
      .catch(err => response.status(500).json(err));
  },

  /**
   * Edit Social
   */
  async edit(request: Request, response: Response) {
    const { id } = request.params;
    const { link, title, image }: ISocial = request.body;

    const query = {
      _id: id
    };

    const body = {
      link,
      title,
      image
    };
    return await Socials.findOneAndUpdate(query, body)
      .then(res => response.status(200).json({ msg: "Success in edit" }))
      .catch(err => response.status(400).json({ msg: "Social not found" }));
  },

  /**
   * Delete Social
   */
  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const query = {
      _id: id
    };

    return await Socials.findOneAndDelete(query)
      .then(res => response.status(200).json({ msg: "Success in delete" }))
      .catch(err => response.status(400).json({ msg: "Social not found" }));
  }
};
