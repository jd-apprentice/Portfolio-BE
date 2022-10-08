import { Request, Response } from "express";
import infoService from "../services/info-service";

class InfoController {
  async createInfo(req: Request, res: Response): Promise<Response> {
    try {
      const newInfo = await infoService.createInfo(req.body);
      await newInfo.save();
      return res.json({ message: "Info saved successfully" });
    } catch (error) {
      return res.status(404).send({ error });
    }
  }

  async getInfo(req: Request, res: Response): Promise<Response> {
    try {
      const info = await infoService.getInfo();
      return res.json(info);
    } catch (error) {
      return res.status(404).send({ error });
    }
  }

  async updateInfo(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const updatedResult = await infoService.updateInfo(id, req.body);
      await updatedResult.save();
      return res.json({ status: "Info updated" });
    } catch (err) {
      return res.status(404).json({ status: "Not Found" });
    }
  }
}

export default new InfoController();
