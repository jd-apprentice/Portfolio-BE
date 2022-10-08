import { IInfo } from "models/interfaces/types";
import infoRepository from "../repositories/info-repository";

class InfoService {
  async createInfo(info: IInfo): Promise<IInfo> {
    try {
      return infoRepository.create(info);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getInfo(): Promise<IInfo[]> {
    try {
      return infoRepository.get();
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async updateInfo(id: string, info: IInfo): Promise<IInfo> {
    try {
      return infoRepository.update(id, info);
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export default new InfoService();
