import { IInfo } from "models/interfaces/types";
import Info from "../models/info";

class InfoRepository {
  async create(info: IInfo) {
    return Info.create(info);
  }

  async get() {
    return Info.find();
  }

  async update(id: string, info: IInfo) {
    return Info.findOneAndUpdate({ _id: id }, info);
  }
}

export default new InfoRepository();
