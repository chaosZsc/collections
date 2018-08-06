// 获取浏览器indexedDB信息
const indexedDB = window.indexedDB

export const testIndexedDBAbility = (): boolean => {
  return !!indexedDB
}
