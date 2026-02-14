import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import UserService from '#services/user_service'
import ServerService from '#services/server_service'
import { installValidator } from '#validators/install'
import db from '@adonisjs/lucid/services/db'

@inject()
export default class InstallController {
  constructor(
    protected userService: UserService,
    protected serverService: ServerService
  ) {}

  public async install({ request, response }: HttpContext) {
    const payload = await installValidator.validate(request.all())

    await db.transaction(async (_tx) => {
      // Create the owner account
      await this.userService.createUser(
        {
          username: payload.owner.username,
          password: payload.owner.password,
          role: 'owner' as const,
        },
        { client: _tx }
      )

      // Update server settings
      await this.serverService.updateSetting('SERVER_NAME', payload.server.name, { client: _tx })
      await this.serverService.updateSetting(
        'SERVER_DESCRIPTION',
        payload.server.description || '',
        { client: _tx }
      )

      // Update app flags
      await this.serverService.updateFlag('APP_INSTALLED', true, { client: _tx })
      await this.serverService.updateFlag('APP_MAINTENANCE', false, { client: _tx })
    })

    return response.redirect().toPath('/')
  }

  public view() {
    // Render install page (handled by Inertia)
  }
}
