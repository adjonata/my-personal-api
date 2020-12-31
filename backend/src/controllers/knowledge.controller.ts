import Knowledges, { IKnowledges } from "../models/knowledge.model";
import { Request, Response } from "express";

export default {
  /**
   * Get all Knowledges
   */
  async getter(request: Request, response: Response) {
    return await Knowledges.find()
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
   * Create Knowledge
   */
  async create(request: Request, response: Response) {
    const { link, title, image }: IKnowledges = request.body;

    return await Knowledges.create({ link, title, image })
      .then(res => response.status(200).json(res))
      .catch(err => response.status(500).json(err));
  },

  /**
   * Edit Knowledge
   */
  async edit(request: Request, response: Response) {
    const { id } = request.params;
    const { link, title, image }: IKnowledges = request.body;

    const query = {
      _id: id
    };

    const body = {
      link,
      title,
      image
    };
    return await Knowledges.findOneAndUpdate(query, body)
      .then(res => response.status(200).json({ msg: "Success in edit" }))
      .catch(err => response.status(400).json({ msg: "Knowledge not found" }));
  },

  /**
   * Delete Knowledge
   */
  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const query = {
      _id: id
    };

    return await Knowledges.findOneAndDelete(query)
      .then(res => response.status(200).json({ msg: "Success in delete" }))
      .catch(err => response.status(400).json({ msg: "Knowledge not found" }));
  }
};
