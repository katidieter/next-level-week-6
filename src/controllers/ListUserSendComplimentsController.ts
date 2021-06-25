import { Request, Response } from "express";
import { ListUserSendComplimentsService } from '../services/ListUserSendComplimentsService';

class ListUserSendComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listUserSendComplimentsService = new ListUserSendComplimentsService();
    const compliments = await listUserSendComplimentsService.execute(user_id);
    console.log(compliments);
    return response.json(compliments);
  }
}

export { ListUserSendComplimentsController }