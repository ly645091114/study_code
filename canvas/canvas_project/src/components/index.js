import CHeader from './header'
import CMenu from './menu'
let components = {}
components.install = Vue => {
  Vue.use(CHeader)
  Vue.use(CMenu)
}
export default components
