import User from '#models/user'
import { createUserValidator } from '#validators/user'
import db from '@adonisjs/lucid/services/db'
import hash from '@adonisjs/core/services/hash'

export type CreateUserInput = {
  username: string
  password: string
  role?: 'guest' | 'member' | 'moderator' | 'admin' | 'owner'
}

export default class UserService {
  public async createUser(input: CreateUserInput, options?: { client?: any }) {
    const payload = await createUserValidator.validate(input)
    const role = (payload.role || input.role || 'guest') as
      | 'guest'
      | 'member'
      | 'moderator'
      | 'admin'
      | 'owner'

    // Use provided transaction client or start new transaction
    if (options?.client) {
      const user = await User.create(
        {
          username: payload.username,
          displayName: payload.username,
          // AuthFinder mixin registers a beforeSave hook to automatically hash user passwords
          // during INSERT & UPDATE calls. Therefore we don't have to manually perform password
          // hasing in our model here.
          // https://docs.adonisjs.com/guides/authentication/verifying-user-credentials#hashing-user-password
          password: payload.password,
          role,
        },
        { client: options.client }
      )
      return user
    } else {
      return db.transaction(async (tx) => {
        const user = await User.create(
          {
            username: payload.username,
            displayName: payload.username,
            password: await hash.make(payload.password),
            role,
          },
          { client: tx }
        )
        return user
      })
    }
  }
}
