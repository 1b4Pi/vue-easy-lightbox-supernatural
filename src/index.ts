import './styles/index'

import type { App } from 'vue'
import _VueEasyLightbox from './vue-easy-lightbox'

export * from './composables'

const VueEasyLightbox = Object.assign(_VueEasyLightbox, {
  install: (app: App) => {
    app.component(_VueEasyLightbox.name, _VueEasyLightbox)
  }
})

export default VueEasyLightbox
