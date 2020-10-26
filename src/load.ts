import { createDependencyResolver } from './dependency-resolver'
import { createSystem } from './system-registrator'

export type LoadOptions = {
  fetcher: (url: string) => Promise<string>
  dependencies: Record<string, any>
}

const defaultOptions: LoadOptions = {
  fetcher: url => fetch(url).then(res => res.text()),
  dependencies: {},
}

export const load = async <T = any>(
  url: string,
  { fetcher, dependencies }: LoadOptions = defaultOptions
) => {
  const data = await fetcher(url)

  const resolver = createDependencyResolver(dependencies)

  const exports = {} as T
  const module = { exports }
  const system = createSystem(exports, resolver)

  const func = new Function('require', 'module', 'exports', 'System', data)
  func(resolver, module, exports, system)

  return module.exports
}
