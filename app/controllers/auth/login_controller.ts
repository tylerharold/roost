import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import User from '#models/user'
import ServerService from '#services/server_service'
import { loginUserValidator } from '#validators/user'

@inject()
export default class LoginController {
  constructor(protected serverService: ServerService) { }

  async view({ inertia }: HttpContext) {
    const serverName = await this.serverService.getSetting('SERVER_NAME')
    const serverIconUrl = await this.serverService.getServerIconUrl()

    return inertia.render('login', {
      serverName: serverName ?? 'Roost',
      serverIconUrl,
    })
  }

  async login({ request, auth, response }: HttpContext) {
    const { username, password } = await request.validateUsing(loginUserValidator)

    const user = await User.verifyCredentials(username, password)
    await auth.use('web').login(user)

    return response.redirect().toPath('/')
  }
}
