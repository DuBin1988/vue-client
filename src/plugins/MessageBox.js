import Vue from 'vue'

let MessageBox = {
  install (Vue, options) {
    // 给vue增添对话框显示方法
    Vue.prototype.$showMessage = function (msg) {
      MessageBox.msg = msg
      MessageBox.show = true
    }

    // 给vue增添对话框关闭方法
    Vue.prototype.$closeMessage = function () {
      MessageBox.show = false
    }
  }
}

Vue.set(MessageBox, 'show', false)
Vue.set(MessageBox, 'msg', '')

export default MessageBox
