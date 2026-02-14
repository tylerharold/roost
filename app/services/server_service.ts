import ServerSetting from '#models/server_setting'
import ServerFlag from '#models/server_flag'

export default class ServerService {
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
}
