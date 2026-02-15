import ServerSetting from '#models/server_setting'
import ServerFlag from '#models/server_flag'

export default class ServerService {
  public async getSetting(key: string, options?: { client?: any }): Promise<string | null> {
    const query = options?.client
      ? ServerSetting.query({ client: options.client })
      : ServerSetting.query()
    const setting = await query.where('key', key).first()
    return setting?.value ?? null
  }

  public async getFlag(key: string, options?: { client?: any }): Promise<boolean | null> {
    const query = options?.client
      ? ServerFlag.query({ client: options.client })
      : ServerFlag.query()
    const flag = await query.where('key', key).first()
    return flag?.enabled ?? null
  }

  public async updateSetting(key: string, value: string, options?: { client?: any }) {
    const updateData = { value }

    if (options?.client) {
      await ServerSetting.updateOrCreate({ key }, updateData, { client: options.client })
    } else {
      await ServerSetting.updateOrCreate({ key }, updateData)
    }
  }

  public async updateFlag(key: string, enabled: boolean, options?: { client?: any }) {
    const updateData = { enabled }

    if (options?.client) {
      await ServerFlag.updateOrCreate({ key }, updateData, { client: options.client })
    } else {
      await ServerFlag.updateOrCreate({ key }, updateData)
    }
  }

  public async isInstalled(options?: { client?: any }): Promise<boolean> {
    const installed = await this.getFlag('APP_INSTALLED', options)
    return installed ?? false
  }

  public async isInMaintenance(options?: { client?: any }): Promise<boolean> {
    const maintenance = await this.getFlag('APP_MAINTENANCE', options)
    return maintenance ?? false
  }

  public async getServerIconPath(options?: { client?: any }): Promise<string> {
    const path = await this.getSetting('SERVER_ICON', options);
    return path ?? ""
  }
}
