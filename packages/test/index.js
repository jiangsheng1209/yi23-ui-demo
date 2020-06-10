//为组件提供install方法, 提供组件对外按需引入

import XrTest from './src/test'
XrTest.install = Vue => {
    Vue.component(XrTest.name, XrTest)
}

export default XrTest