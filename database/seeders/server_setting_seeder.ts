import ServerSetting from '#models/server_setting'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await ServerSetting.createMany([
      {
        key: "SERVER_NAME",
        value: "Roost Server",
        friendlyName: "Server Name",
        friendlyDescription: "Name of your Roost server"
      },
      {
        key: "SERVER_DESCRIPTION",
        value: "My awesome Roost server!",
        friendlyName: "Server Description",
        friendlyDescription: "Short description of your Roost server"
      },
    ])
  }
}
