import { promises as fs } from 'node:fs'
import webfont from 'webfont'
import consolji from 'consolji'

webfont({
   files: 'icons/**/*.svg',
   fontName: 'material-icons',
   formats: ['woff'],
   glyphTransformFn: (obj) => {
      obj.name += '_transform'
      return obj
   },
   prependUnicode: true,
})
   .then(async (result) => {
      await save(result.woff as Uint8Array)
      return result
   })
   .catch((error) => {
      consolji.error(error)
      throw error
   })

async function save(result: Uint8Array) {
   await fs.writeFile('theme/material-icons.woff', result)
}
