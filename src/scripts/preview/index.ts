import * as fs from 'node:fs'
import * as path from 'node:path'
import { generatePreview } from './preview'

const iconsPath = path.join(__dirname, '..', '..', '..', 'icons')
const icons = fs.readdirSync(iconsPath).map((icon) => {
   return {
      fileName: icon,
      unicode: icon.slice(0, 5),
      iconName: icon.substring(6, icon.length - 4),
   }
})

generatePreview('preview', icons, 4, [])
