/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

import InstallController from '#controllers/installer/install_controller'

router.on('/').renderInertia('home')
router.on('/install').renderInertia('install')

// API
router.group(() => {
  // v1
  router.group(() => {
    router.group(() => {
      router.post('install', [InstallController, 'install'])
    }).prefix('/installer')
  }).prefix('/v1')
}).prefix('/api')



