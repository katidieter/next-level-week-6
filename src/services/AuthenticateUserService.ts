import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UserRepositories } from "../repositories/UserRepositories";

interface IAuthenticateRequest {
  email: string,
  password: string
}

class AuthenticateUserService {
  async execute({email, password} : IAuthenticateRequest) {
    const userRepositories = getCustomRepository(UserRepositories);

    const user = await userRepositories.findOne({ email });

    if (!user) {
      throw new Error("Email/password incorret");
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error("Email/password incorret");
    }

    const token = sign({
      email: user.email
    }, process.env.SECRET_API, {
      subject: user.id,
      expiresIn: "1d"
    });

    return token;
  }
}

export { AuthenticateUserService }