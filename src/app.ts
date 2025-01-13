import { defineApp } from 'iles'
import 'uno.css'
import '@/assets/css/tailwind.css'
import 'prismjs/themes/prism-tomorrow.css'

import { headConfig } from '@/plugins/head'
import pinia from '@/plugins/pinia'

export default defineApp({
  enhanceApp({ app }) {
    app.use(pinia)
  },
  head({ frontmatter, site }) {
    return headConfig({ frontmatter, site })
  },
})
