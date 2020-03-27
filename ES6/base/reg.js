/**
 * @description 具名组匹配获取参数
 * @param { String } str 格式化参数
 * @param { String } prop 指定字段名称
 */
const formatParams = (str, prop) => {
  str = str.replace(/((.*)\?)|(&$)/g, '')
  const strArr = str.split('&')
  const obj = {}
  const reg = /(?<key>.*)=(?<value>.*)/
  for (const item of strArr) {
    const { groups:{ key, value }} = reg.exec(item)
    if (key) {
      obj[key] = value
    }
  }
  return prop ? obj[prop] : obj
}
let str = 'www.qq.com/index?type=xixi&nihao=xixi&'
let params = formatParams(str)
console.log(params)
