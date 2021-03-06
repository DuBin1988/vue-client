import Vue from 'vue'

import VueResource from 'vue-resource'
import Partial from './plugins/Partial'
import MessageBoxPlugin from './plugins/MessageBox'
import HttpStore from '../src/plugins/HttpStore'
import RoutePlugin from '../src/plugins/Route'

import VueValidator from 'vue-validator'

// 引入所有组件
import AppBase from './components/AppBase'
import Busy from './components/Busy'
import Criteria from './components/Criteria'
import CriteriaPaged from './components/CriteriaPaged'
import DataGrid from './components/DataGrid'
import GridTree from './components/GridTree'
import HttpBusy from './components/HttpBusy'
import List from './components/List'
import MessageBox from './components/MessageBox'
import Pager from './components/Pager'
import Tree from './components/Tree'
import Route from './components/Route'
import Dynamic from './components/Dynamic'

// 引入vue-strap组件
import Tabset from './vue-strap/src/Tabset'
import Tab from './vue-strap/src/Tab'
import Modal from './vue-strap/src/Modal'

require('./client.less')

export default function () {
  Vue.config.debug = true
  Vue.use(VueResource)
  Vue.mixin(Partial)
  Vue.mixin(RoutePlugin)
  Vue.use(MessageBoxPlugin)
  Vue.use(HttpStore)
  Vue.use(VueValidator)

  // 全局注册基础组件
  Vue.component('app-base', AppBase)
  Vue.component('busy', Busy)
  Vue.component('criteria', Criteria)
  Vue.component('criteria-paged', CriteriaPaged)
  Vue.component('data-grid', DataGrid)
  Vue.component('grid-tree', GridTree)
  Vue.component('http-busy', HttpBusy)
  Vue.component('list', List)
  Vue.component('message-box', MessageBox)
  Vue.component('pager', Pager)
  Vue.component('tree', Tree)
  Vue.component('route', Route)
  Vue.component('dynamic', Dynamic)

  // 注册vue-strap组件
  Vue.component('tabset', Tabset)
  Vue.component('tab', Tab)
  Vue.component('modal', Modal)
}
