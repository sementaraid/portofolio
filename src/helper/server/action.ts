import { readdir, stat } from "fs/promises"
import { join } from "path"

const defaultPath = join(process.cwd(), 'src/directories')
const extension = '.mdx'

export async function generateRouteStructure(basePath: string = defaultPath): Promise<string[]> {
  try {
    const items = await readdir(basePath)
    const filePaths: string[] = []

    for (const item of items) {
      const fullPath = join(basePath, item)
      const stats = await stat(fullPath)

      if (stats.isDirectory()) {
        const subFiles = await generateRouteStructure(fullPath)
        filePaths.push(...subFiles)
      } else {
        filePaths.push(fullPath.replace(defaultPath, '').replace(extension, ''))
      }
    }

    return filePaths
  } catch (error) {
    console.error(`Error generating file paths: ${error}`)
    return []
  }
}
