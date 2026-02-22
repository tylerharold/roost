import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import { inject } from '@adonisjs/core';
import ServerService from '#services/server_service';

@inject()
export default class EnsureInstalledMiddleware {
  constructor(protected serverService: ServerService) { }

  async handle(ctx: HttpContext, next: NextFn) {
    const installed = await this.serverService.isInstalled();

    if (!installed && ctx.request.url() !== "/install" && ctx.request.url() !== "/") {
      return ctx.response.redirect("/");
    }

    const output = await next()
    return output
  }
}
