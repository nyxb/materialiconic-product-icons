import * as fs from 'node:fs'
import * as path from 'node:path'
import consolji from 'consolji'
import { createScreenshot } from '../../helpers/screenshots'
import { toTitleCase } from './../../helpers'
import * as painter from './../../helpers/painter'

const htmlDoctype = '<!DOCTYPE html>'
const cssFilePath = path.join('style.css')
const styling = `<link rel="stylesheet" href="${cssFilePath}">`

function createHTMLTableHeadRow(amount: number) {
   const pair = `
        <th class="icon">Icon</th>
        <th class="iconName">Name</th>
    `
   const columns = [...Array(amount)].map(() => pair).join('')
   return `
        <tr>
            ${columns}
        </tr>
    `
}

function createHTMLTableBodyRows(items: IconDefinition[][]) {
   let rows = ''
   items.forEach((row) => {
      const columns = row
         .map(
            icon => `
            <td class="icon">
                <img src="./../../../icons/${icon.fileName}" alt="${
          icon.iconName
        }">
            </td>
            <td class="iconName">${toTitleCase(icon.iconName)} (${
          icon.unicode
        })</td>
        `,
         )
         .join('')
      const tableRow = `
            <tr>
                ${columns}
            </tr>
        `
      rows = rows + tableRow
   })
   return rows
}

function createHTMLTable(headRow: string, bodyRows: string) {
   return `
    <table>
        ${headRow}
        ${bodyRows}
    </table>
`
}

function createPreviewTable(icons: IconDefinition[][], size: number) {
   const table
    = htmlDoctype
    + styling
    + createHTMLTable(
       createHTMLTableHeadRow(size),
       createHTMLTableBodyRows(icons),
    )
   return table
}

function savePreview(fileName: string,
   size: number,
   icons: IconDefinition[][]) {
   const filePath = path.join(__dirname, `${fileName}.html`)

   // write the html file with the icon table
   fs.writeFileSync(filePath, createPreviewTable(icons, size))

   // create the image
   createScreenshot(filePath, fileName)
      .then(() => {
         consolji.log(
            'MaterialIconic Icon Theme:',
            painter.green(`Successfully created ${fileName} image!`),
         )
      })
      .catch(() => {
         throw new Error(
            painter.red(`Error while creating ${fileName} preview image`),
         )
      })
}

function getIconDefinitionsMatrix(icons: IconDefinition[],
   size: number,
   excluded: string[] = []): IconDefinition[][] {
   const iconList = icons
      .sort((a, b) => a.iconName.localeCompare(b.iconName))
      .filter(i => !excluded.includes(i.iconName))

   // list for the columns with the icons
   const matrix: IconDefinition[][] = []

   // calculate the amount of icons per column
   const itemsPerColumn = Math.floor(iconList.length / size)

   // create the columns with the icons
   let counter = 0
   for (let c = 0; c < itemsPerColumn; c++)
      matrix[c] = []

   for (let s = 0; s < size; s++) {
      for (let i = 0; i < itemsPerColumn; i++) {
         matrix[i][s] = iconList[counter]
         counter++
      }
   }

   return matrix
}

/**
 * Function that generates the preview image for specific icons.
 * @param name name of the preview
 * @param icons icons for the preview
 * @param size amount of table columns
 * @param excluded which icons shall be excluded
 */
export function generatePreview(name: string,
   icons: IconDefinition[],
   size: number,
   excluded: string[] = []) {
   savePreview(name, size, getIconDefinitionsMatrix(icons, size, excluded))
}

interface IconDefinition {
   iconName: string
   fileName: string
   unicode: string
}
