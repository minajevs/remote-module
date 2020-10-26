export type DependencyResolver = (name: string) => any

export const createDependencyResolver = (dependencies: Record<string, any>): DependencyResolver =>
  (name: string) => {
    const value = dependencies[name]

    if (value === undefined)
      throw new Error(`${name} dependency missing from load config!`)

    return value
  }
