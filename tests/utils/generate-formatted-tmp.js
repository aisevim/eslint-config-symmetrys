import { writeFileSync } from 'node:fs'

export default results => {
  const files = {}

  results.forEach(result => {
    if (result.output && result.filePath) {
      const newFilePath = result.filePath.replace(/(\.[^.]*$)/, '-tmp$1')
      files[newFilePath] = result.output

      writeFileSync(newFilePath, result.output)
    }
  })

  return files
}
