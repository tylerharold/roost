import ServerService from '#services/server_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class HomeController {
  constructor(protected serverService: ServerService) {}

  async handle({ inertia }: HttpContext) {
    let payload: any = {}

    const installed = await this.serverService.isInstalled()
    payload['installed'] = installed

    if (installed) {
      const serverName = await this.serverService.getSetting('SERVER_NAME')
      const serverDescription = await this.serverService.getSetting('SERVER_DESCRIPTION')
      const serverIcon = await this.serverService.getServerIconPath()

      payload['server'] = {}
      payload['server']['name'] = serverName
      payload['server']['description'] = serverDescription
      payload['server']['icon'] = serverIcon
    }

    return inertia.render('home', payload)
  }
}
