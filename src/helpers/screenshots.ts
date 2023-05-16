import * as path from 'node:path'
import puppeteer from 'puppeteer'
import consolji from 'consolji'

/**
 * Create a screenshot from an HTML file and save it as image.
 * @param filePath Path of an HTML file
 * @param fileName Name of the output image
 */
export async function createScreenshot(filePath: string, fileName: string) {
   try {
      const htmlFilePath = path.join('file:', filePath)
      const browser = await puppeteer.launch()
      const page = await browser.newPage()
      await page.setViewport({
         height: 10,
         width: 1300,
      })

      await page.goto(htmlFilePath)

      await page.screenshot({
         path: `images/${fileName}.png`,
         omitBackground: true,
         fullPage: true,
      })

      await browser.close()
   }
   catch (error) {
      consolji.error(error)
      throw new Error('An error occurred!')
   }
}
