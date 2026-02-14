import User, { UserRole } from "#models/user"
import { createUserValidator } from "#validators/user"
import db from "@adonisjs/lucid/services/db"

export type CreateUserInput = {
  username: string
  password: string
  role: UserRole,
}

export default class UserService {
  public async createUser(input: CreateUserInput) {
    const payload = await createUserValidator.validate(input);

    return db.transaction(async (tx) => {
      const user = await User.create(
        {
          username: payload.username,
          displayName: payload.username,
          password: payload.password,
          role: payload.role,
        },
        { client: tx }
      )

      return user;
    })
  }
}
