import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagRepositories";
import { classToPlain } from "class-transformer";

class ListTagsService {
  async execute() {
    const tagRepositories = getCustomRepository(TagRepositories);
    const tags = await tagRepositories.find();
    return classToPlain(tags);
  }
}

export { ListTagsService }