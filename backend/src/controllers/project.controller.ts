import Projects, { IProject } from "../models/project.model";
import { Request, Response } from "express";

export default {
  /**
   * Get all Projects
   */
  async getter(request: Request, response: Response) {
    return await Projects.find()
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
   * Create Project
   */
  async create(request: Request, response: Response) {
    const {
      image,
      title,
      description,
      link,
      spotlight = false,
      color
    }: IProject = request.body;

    const body = { image, title, description, link, spotlight, color };

    return await Projects.create(body)
      .then(res => response.status(200).json(res))
      .catch(err => response.status(500).json(err));
  },

  /**
   * Edit Project
   */
  async edit(request: Request, response: Response) {
    const { id } = request.params;
    const {
      image,
      title,
      description,
      link,
      spotlight,
      color
    }: IProject = request.body;

    const query = {
      _id: id
    };

    const body = { image, title, description, link, spotlight, color };

    return await Projects.findOneAndUpdate(query, body)
      .then(res => response.status(200).json({ msg: "Success in edit" }))
      .catch(err => response.status(400).json({ msg: "Project not found" }));
  },

  /**
   * Delete Project
   */
  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const query = {
      _id: id
    };

    return await Projects.findOneAndDelete(query)
      .then(res => response.status(200).json({ msg: "Success in delete" }))
      .catch(err => response.status(400).json({ msg: "Project not found" }));
  }
};
