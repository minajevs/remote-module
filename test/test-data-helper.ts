import fs from 'fs'

export const getModuleFile = (module: string) =>
  fs.readFileSync(`${__dirname}/test-data/${module}.module.js`, 'utf8')
