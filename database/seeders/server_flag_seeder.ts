import ServerFlag from '#models/server_flag'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await ServerFlag.createMany([
      {
        key: "APP_INSTALLED",
        enabled: false,
      },
      {
        key: "APP_MAINTENANCE",
        enabled: true,
      }
    ])
  }
}
