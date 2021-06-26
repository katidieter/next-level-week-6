import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { SendEmailService } from "./SendEmailService"

class SendComplimentEmailService {
  async execute(compliment_id : string){
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    const compliment = await complimentsRepositories.findOne({
      where: {
        id: compliment_id
      },
      relations: ["userSender", "userReceiver", "tag"]
    });

    const sendEmailService = new SendEmailService();
    const userSenderName = compliment.userSender.name;

    return sendEmailService.execute({
      to: compliment.userReceiver.email,
      from: process.env.EMAIL_SENDER,
      subject: `YAY!! You has been recognized by ${userSenderName}`,
      text: `
        Congratulations ${compliment.userReceiver.name}!!
        ${userSenderName} send you a compliment for ${compliment.tag.name} tag:
        "${compliment.message}"`
    });
  }
}

export { SendComplimentEmailService }