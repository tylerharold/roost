/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

import InstallController from '#controllers/installer/install_controller'
import HomeController from '#controllers/home_controller'
import LoginController from '#controllers/auth/login_controller'

router.get('/', [HomeController])
router.get('/install', [InstallController, 'view'])
router.get('/login', [LoginController, 'view']).use(middleware.installed())

// API
router.group(() => {
  // v1
  router.group(() => {
    // Installer
    router.group(() => {
      router.post('install', [InstallController, 'install'])
    }).prefix('/installer')

    // Auth
    router.group(() => {
      router.post('/login', [LoginController, 'login'])
    }).prefix('/auth').use(middleware.installed())
  }).prefix('/v1')
}).prefix('/api')
