import Vue from 'vue'

import 'normalize.css/normalize.css' //* 第三方css库，不同浏览器标签渲染一致 重置样式

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//* 用来做国际化 一个语言包
import locale from 'element-ui/lib/locale/lang/en' //* lang i18n->国际化单词简写

import '@/styles/index.scss' //* 全局公共样式

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' //* permission control 权限控制

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// } //*不需要就注释掉，这里不需要

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
