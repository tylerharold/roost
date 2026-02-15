import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { cuid } from '@adonisjs/core/helpers'
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
    const payload = await request.validateUsing(installValidator)

    const iconFile = payload.server.icon
    let iconKey: string | null = null

    if (iconFile) {
      const key = `server/settings/${cuid()}.${iconFile.extname}`
      await iconFile.moveToDisk(key)

      if (!iconFile.isValid) {
        return response.unprocessableEntity({
          errors: iconFile.errors,
        })
      }

      iconKey = key
    }

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

      // Persist the Drive key for the server icon
      if (iconKey) {
        await this.serverService.updateSetting('SERVER_ICON', iconKey, { client: _tx })
      }

      // Update app flags
      await this.serverService.updateFlag('APP_INSTALLED', true, { client: _tx })
      await this.serverService.updateFlag('APP_MAINTENANCE', false, { client: _tx })
    })

    return response.redirect().toPath('/')
  }

  public async view({ inertia, response }: HttpContext) {
    const installed = await this.serverService.isInstalled()

    if (installed) {
      return response.redirect().toPath('/')
    }

    return inertia.render('install')
  }
}
