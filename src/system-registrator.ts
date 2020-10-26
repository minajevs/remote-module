import { DependencyResolver } from './dependency-resolver'

type SystemRegisterExecute = {
  execute: () => void
  setters: [(dep: any) => void]
}
type SystemRegisterExports = (prop: string, value: any) => void
type SystemRegisterCallback = (exports: SystemRegisterExports, context: any) => SystemRegisterExecute

const importDefault = (dep: any) => {
  return { ...dep, default: dep }
}

export const createSystem = (exports: any, dependencyResolver: DependencyResolver) => ({
  register: (dependencies: string[], callback: SystemRegisterCallback) => {
    const exportFn: SystemRegisterExports = (prop, value) => (exports[prop] = value)
    const result = callback(exportFn, {})
    dependencies.forEach((dependency, i) => {
      const resolvedDependency = importDefault(dependencyResolver(dependency))
      result.setters[i](resolvedDependency)
    })
    result.execute.bind(callback)()
  },
})
