import { load } from '../src'
import { getModuleFile } from './test-data-helper'

const fetcher = jest.fn<Promise<string>, [string]>()

describe('load', () => {
  beforeEach(() => {
    fetcher.mockClear()
  })

  const modules = ['commonjs', 'umd', 'systemjs']

  modules.forEach(moduleName =>
    it(`loads ${moduleName} module`, async () => {
      const moduleFile = getModuleFile(moduleName)
      fetcher.mockReturnValue(Promise.resolve(moduleFile))

      const dependencies = { dependency: 'success-dependency' }

      const module = await load('http://test.url', { fetcher, dependencies })

      expect(module).toHaveProperty('test')
      expect(module).toHaveProperty('testDependency')
      expect(module).toHaveProperty('default')
      expect(module.test).toEqual('success')
      expect(module.testDependency).toEqual(dependencies.dependency)
      expect(module.default).toEqual('success')
    })
  )
})
