import { setApiKey, send } from "@sendgrid/mail" ;

interface ISendEmailRequest{
  to: string,
  from: string,
  subject: string,
  text: string
}

class SendEmailService {
  async execute({ to, from, subject, text}: ISendEmailRequest) {
    setApiKey(process.env.SENDGRID_API_KEY);

    console.log(to, from, subject, text);
    const sendgridResponse = await send({
      to,
      from,
      subject,
      text,
    });

    const { statusCode } = sendgridResponse[0];

    if (statusCode != 202) {
      throw new Error("Email service is unavailable!")
    }

    return statusCode;
  }
}

export { SendEmailService }