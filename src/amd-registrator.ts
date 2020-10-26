type AmdDefineCallback = (require: any, exports: any, ...dependencies: any[]) => void

export const createAmdDefine = (require: any, exports: any, dependencies: Record<string, any>) => (
  _definitions: string[],
  callback: AmdDefineCallback
) => {
  callback(require, exports, ...Object.values(dependencies))
}
